import React from 'react';
import config from '../config';

interface GreekHelmetIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name GreekHelmetIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/greek-helmet)
 * @see {@link https://clicons.dev/icon/greek-helmet}
 */
const GreekHelmetIcon = React.forwardRef<SVGSVGElement, GreekHelmetIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9 14C7 14 5.83322 17.6296 5.99988 19C4.14859 17.1983 3 14.6877 3 11.9108C3 6.76287 6.94721 2.53019 12.001 2.03275C12.4478 1.98877 12.6712 1.96677 12.8354 2.11575C13.3348 2.56889 12.9996 4.36144 12.9996 4.96193C13.7789 4.30632 15.0114 2.72457 16.0759 2.57041C16.358 2.52957 16.58 2.62656 17.0239 2.82052C18.6063 3.51193 19.974 4.59861 21 5.95462C21 5.95462 17.5 6.48813 16.9994 8.9327'
    }
  ],
  [
    'path',
    {
      d: 'M20.1566 12.658C19.789 9.67865 17.7759 8 14.4972 8C9.90074 8 7.84028 13.0457 9.7103 17.0916C9.96239 17.6371 9.73364 18.3581 9.5865 18.907C9.10408 20.7065 8.86287 21.6063 9.08073 21.8176C9.2986 22.0289 10.0823 21.7996 11.6497 21.3409C13.0596 20.9284 15.0623 19.8633 16.5629 20.0289C17.493 20.1316 20.0349 22.4885 20.8339 21.9082C21.1025 21.7132 21.0072 21.2394 20.8167 20.2919L20.385 18.1442C20.2456 17.4512 20.0588 17.3686 19.3707 17.225C18.1757 16.9757 17.2936 16.2442 16.8599 15.7039C16.6029 15.3838 16.6536 15.1174 16.9265 14.8268C17.6835 14.0208 18.4639 13.7839 19.1785 13.716C19.9976 13.6382 20.2609 13.5026 20.1566 12.658Z'
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

GreekHelmetIcon.displayName = 'GreekHelmetIcon';
export default GreekHelmetIcon;
