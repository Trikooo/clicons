import React from 'react';
import config from '../config';

interface HijabIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HijabIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hijab)
 * @see {@link https://clicons.dev/icon/hijab}
 */
const HijabIcon = React.forwardRef<SVGSVGElement, HijabIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.5 5C10.8431 5 9.5 6.34315 9.5 8V10C9.5 11.6569 10.8431 13 12.5 13C14.1569 13 15.5 11.6569 15.5 10V8C15.5 6.34315 14.1569 5 12.5 5Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 10C15.5 12.5 15.18 14.4 11.7667 16C8.35333 17.6 7.5 19.8333 7.5 21'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 8H15.5'
    }
  ],
  [
    'path',
    {
      d: 'M18.3022 7.51864C18.3022 4.47078 15.7045 2 12.5 2C9.29554 2 6.69782 4.47078 6.69782 7.51864C6.69782 9.61659 5.95992 13.4691 3.55841 16.4349C2.81105 17.3578 2.43737 17.8193 2.50859 18.244C2.5798 18.6687 2.98003 18.9288 3.78049 19.4489C9.01571 22.8504 15.9843 22.8504 21.2195 19.4489C22.02 18.9288 22.4202 18.6687 22.4914 18.244C22.5626 17.8193 22.189 17.3578 21.4416 16.4349C19.0401 13.4691 18.3022 9.61659 18.3022 7.51864Z'
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

HijabIcon.displayName = 'HijabIcon';
export default HijabIcon;
