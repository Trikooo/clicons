import React from 'react';
import config from '../config';

interface TransitionTopIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TransitionTopIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/transition-top)
 * @see {@link https://clicons.dev/icon/transition-top}
 */
const TransitionTopIcon = React.forwardRef<SVGSVGElement, TransitionTopIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.9999 21.9999C19.4001 21.9999 20.1001 21.9999 20.6349 21.7275C21.1053 21.4878 21.4878 21.1053 21.7275 20.6349C21.9999 20.1001 21.9999 19.4001 21.9999 17.9999C21.9999 16.5998 21.9999 15.8997 21.7275 15.365C21.4878 14.8946 21.1053 14.5121 20.6349 14.2724C20.1001 13.9999 19.4001 13.9999 17.9999 13.9999L5.99994 13.9999C4.59981 13.9999 3.89974 13.9999 3.36496 14.2724C2.89456 14.5121 2.51211 14.8946 2.27242 15.365C1.99994 15.8997 1.99994 16.5998 1.99994 17.9999C1.99994 19.4001 1.99994 20.1001 2.27242 20.6349C2.51211 21.1053 2.89456 21.4878 3.36496 21.7275C3.89974 21.9999 4.59981 21.9999 5.99994 21.9999L17.9999 21.9999Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.9999 5.99994L11.9999 13.9999M11.9999 5.99994C11.2997 5.99994 9.99147 7.99424 9.49994 8.49994M11.9999 5.99994C12.7002 5.99994 14.0084 7.99424 14.4999 8.49994'
    }
  ],
  [
    'path',
    {
      d: 'M1.99994 7.99994C1.99994 5.66105 1.99994 4.49161 2.5364 3.63783C2.81615 3.19261 3.19261 2.81615 3.63783 2.5364C4.49161 1.99994 5.66105 1.99994 7.99994 1.99994L15.9999 1.99994C18.3388 1.99994 19.5083 1.99994 20.3621 2.5364C20.8073 2.81615 21.1837 3.19261 21.4635 3.63783C21.9999 4.49161 21.9999 5.66105 21.9999 7.99994'
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

TransitionTopIcon.displayName = 'TransitionTopIcon';
export default TransitionTopIcon;
