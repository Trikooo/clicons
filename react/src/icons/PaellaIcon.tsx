import React from 'react';
import config from '../config';

interface PaellaIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PaellaIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/paella)
 * @see {@link https://clicons.dev/icon/paella}
 */
const PaellaIcon = React.forwardRef<SVGSVGElement, PaellaIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 9C10.4 9 9 10 9 10C9.16667 10.5 10 11.5 12 11.5M12 9C14 9 15 10 15 11.5C15 12.5409 14.2776 13.3411 13 13.9004M12 9C12.8 10.2 12.3333 11.1667 12 11.5M11 14.5C11.7651 14.347 12.4366 14.1471 13 13.9004M12 11.5C12.8333 11.6003 14.2 12.2208 13 13.9004'
    }
  ],
  [
    'path',
    {
      d: 'M14 6V6.01'
    }
  ],
  [
    'path',
    {
      d: 'M18 13.4898V13.4998'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 16.4895V16.4995'
    }
  ],
  [
    'path',
    {
      d: 'M8 17V17.01'
    }
  ],
  [
    'path',
    {
      d: 'M6 9V9.01'
    }
  ],
  [
    'path',
    {
      d: 'M13.9903 18C13.9903 18 13.311 18.5581 12.5368 18.6224C11.7626 18.6867 11.0005 18.2482 11.0005 18.2482'
    }
  ],
  [
    'path',
    {
      d: 'M8.3418 7.33915C8.3418 7.33915 8.71806 6.54456 9.39084 6.15614C10.0636 5.76771 10.9399 5.83915 10.9399 5.83915'
    }
  ],
  [
    'path',
    {
      d: 'M16.5177 8.24963C16.5177 8.24963 17.3709 8.4617 17.8845 9.04459C18.398 9.62748 18.5009 10.5006 18.5009 10.5006'
    }
  ],
  [
    'path',
    {
      d: 'M8.44209 14.4442C8.44209 14.4442 7.58608 14.2437 7.06469 13.6678C6.54329 13.0919 6.42859 12.2203 6.42859 12.2203'
    }
  ],
  [
    'path',
    {
      d: 'M7 3.1327L6.43365 2.56635C5.67851 1.81122 4.45419 1.81122 3.69906 2.56635L2.56635 3.69906C1.81122 4.45419 1.81122 5.67851 2.56635 6.43365L3.1327 7'
    }
  ],
  [
    'path',
    {
      d: 'M17 20.8673L17.5664 21.4336C18.3215 22.1888 19.5458 22.1888 20.3009 21.4336L21.4336 20.3009C22.1888 19.5458 22.1888 18.3215 21.4336 17.5664L20.8673 17'
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

PaellaIcon.displayName = 'PaellaIcon';
export default PaellaIcon;
