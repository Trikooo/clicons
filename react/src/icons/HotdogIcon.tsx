import React from 'react';
import config from '../config';

interface HotdogIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HotdogIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hotdog)
 * @see {@link https://clicons.dev/icon/hotdog}
 */
const HotdogIcon = React.forwardRef<SVGSVGElement, HotdogIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19 10.9804C19.536 10.396 20.5 9.59796 21.4626 8.34706C22.1108 7.50471 22.1638 6.31485 21.6693 5.3705C20.7595 3.63341 18.4754 3.50827 17.1607 4.93446C16.8434 5.27862 16.5144 5.61831 16.174 5.95276M6.93327 18.4243C6.20617 18.6439 5.48603 18.8247 4.77684 18.9669C3.79101 19.1646 2.82972 18.6203 2.33514 17.676C1.42537 15.9389 2.46911 13.6957 4.24688 13.1536C4.67588 13.0228 5.10725 12.8785 5.5402 12.7207'
    }
  ],
  [
    'path',
    {
      d: 'M17.0061 5.02107C16.8791 4.42183 16.3587 3.34206 15.272 3.12401C13.7471 2.81802 13.0927 3.01069 11.2628 4.54068C9.79897 5.76466 6.68825 7.16715 5.31587 7.7154C4.04314 8.22384 2.59563 9.56297 3.08016 11.1512C3.56777 12.7495 4.4739 12.7661 4.82836 12.9258'
    }
  ],
  [
    'path',
    {
      d: 'M19.274 11.1588C20.3606 11.3768 20.881 12.4566 21.0081 13.0559C21.1688 14.2282 20.0867 15.3406 19.5256 15.7502C18.5987 16.4015 16.0008 18.2201 13.5049 19.5722C10.9418 20.9606 9.43744 21.0882 8.83032 20.9606C8.47585 20.8009 7.56973 20.7843 7.08211 19.186C6.59759 17.5978 8.04509 16.2586 9.31783 15.7502C10.6902 15.2019 13.8009 13.7995 15.2648 12.5755C17.0946 11.0455 17.7491 10.8528 19.274 11.1588Z'
    }
  ],
  [
    'path',
    {
      d: 'M8.34424 11.7894C8.58749 11.5046 8.77902 10.9416 8.92541 10.2989C9.04667 9.76658 9.73301 9.87816 10.3982 10.1293C10.6334 10.2181 10.903 10.139 11.0356 9.92532L12.0961 8.21626C12.2049 8.04082 12.4104 7.95182 12.6062 8.01735C13.0932 8.18035 13.7219 8.45428 14.074 8.27768'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

HotdogIcon.displayName = 'HotdogIcon';
export default HotdogIcon;
