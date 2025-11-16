import React from 'react';
import config from '../config';

interface DisabilityIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DisabilityIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/disability)
 * @see {@link https://clicons.dev/icon/disability}
 */
const DisabilityIcon = React.forwardRef<SVGSVGElement, DisabilityIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.5 18H18.177C17.8491 18 17.6852 18 17.5582 17.914C17.4312 17.8281 17.3703 17.6758 17.2486 17.3714L16.7514 16.1286C16.6297 15.8242 16.5688 15.6719 16.4418 15.586C16.3148 15.5 16.1509 15.5 15.823 15.5H13.5C13.0286 15.5 12.7929 15.5 12.6464 15.3536C12.5 15.2071 12.5 14.9714 12.5 14.5V10.5M12.5 8V10.5M12.5 10.5H16.3889'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 6C11.3954 6 10.5 5.10457 10.5 4C10.5 2.89543 11.3954 2 12.5 2C13.6046 2 14.5 2.89543 14.5 4C14.5 5.10457 13.6046 6 12.5 6Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.55796 10C6.68735 10.4794 4.5 12.9645 4.5 15.9582C4.5 19.295 7.21743 22 10.5696 22C12.6003 22 14.3982 21.0072 15.5 19.4826'
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

DisabilityIcon.displayName = 'DisabilityIcon';
export default DisabilityIcon;
