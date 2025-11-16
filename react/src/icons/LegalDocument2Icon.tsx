import React from 'react';
import config from '../config';

interface LegalDocument2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LegalDocument2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/legal-document2)
 * @see {@link https://clicons.dev/icon/legal-document2}
 */
const LegalDocument2Icon = React.forwardRef<SVGSVGElement, LegalDocument2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14Z'
    }
  ],
  [
    'path',
    {
      d: 'M8 18H16'
    }
  ],
  [
    'path',
    {
      d: 'M7.04941 6.97656H16.9569M12.0148 6.97656V13.9827M12.0148 13.9827H11.4817M12.0148 13.9827H12.5414M8.01555 7.96462C7.29005 8.71035 6.08766 9.99631 6.61359 11.0676C7.08068 12.0191 7.74498 12.0358 8.01512 12.0358C8.28525 12.0358 8.98805 12.0191 9.45514 11.0676C9.98108 9.99631 8.74104 8.71035 8.01555 7.96462ZM15.9824 7.96462C15.2569 8.71035 14.0545 9.99631 14.5804 11.0676C15.0475 12.0191 15.7118 12.0358 15.9819 12.0358C16.2521 12.0358 16.9549 12.0191 17.422 11.0676C17.9479 9.99631 16.7079 8.71035 15.9824 7.96462Z'
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

LegalDocument2Icon.displayName = 'LegalDocument2Icon';
export default LegalDocument2Icon;
